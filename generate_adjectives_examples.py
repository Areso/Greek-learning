#!/usr/bin/env python3
import json
import shutil
import subprocess
from pathlib import Path


ROOT = Path(__file__).resolve().parent
JS_FILE = ROOT / "adjectives.js"
OUTPUT_FILE = ROOT / "adjectives_examples.txt"


def run_javascript() -> list[dict]:
    js_path = json.dumps(str(JS_FILE))

    if node := shutil.which("node"):
        runner = f"""
const fs = require("fs");
const vm = require("vm");
const source = fs.readFileSync({js_path}, "utf8");
const output = vm.runInNewContext(source + "\\nJSON.stringify(adjectiveCards);");
process.stdout.write(output);
"""
        result = subprocess.run(
            [node, "-e", runner],
            check=True,
            capture_output=True,
            text=True,
        )
    elif osascript := shutil.which("osascript"):
        runner = f"""
ObjC.import("Foundation");
var data = $.NSData.dataWithContentsOfFile({js_path});
var source = $.NSString.alloc.initWithDataEncoding(data, 4).js;
eval(source + "\\nJSON.stringify(adjectiveCards);");
"""
        result = subprocess.run(
            [osascript, "-l", "JavaScript", "-e", runner],
            check=True,
            capture_output=True,
            text=True,
        )
    else:
        raise RuntimeError("JavaScript runtime not found: install Node.js or run on macOS")

    return json.loads(result.stdout)


def format_examples(cards: list[dict]) -> str:
    lines = []
    for card in cards:
        lines.append(f"{card['greek']} ({card['english']})")
        lines.append("=" * len(lines[-1]))

        for example in card["examples"]:
            lines.append(f"[{example['label']}]")
            for variant in example["variants"]:
                lines.append(f"Greek:   {variant['greek']}")
                lines.append(f"English: {variant['english']}")
                lines.append("")

        lines.append("")

    return "\n".join(lines).rstrip() + "\n"


def main() -> None:
    cards = run_javascript()
    if OUTPUT_FILE.exists():
        OUTPUT_FILE.unlink()
    OUTPUT_FILE.write_text(format_examples(cards), encoding="utf-8")
    print(f"Wrote {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
