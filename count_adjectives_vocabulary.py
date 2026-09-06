#!/usr/bin/env python3
import unicodedata

from generate_adjectives_examples import run_javascript


def normalized(word: str) -> str:
    return unicodedata.normalize("NFC", word.strip().lower())


def main() -> None:
    cards = run_javascript()
    adjectives = {normalized(card["greek"]) for card in cards}
    nouns = set()

    for card in cards:
        nouns.update(normalized(noun["greek"][0]) for noun in card["exampleNouns"])
        nouns.update(
            normalized(item["noun"]["greek"][0])
            for item in card.get("additionalExampleNouns", [])
        )

    print(f"Unique adjectives: {len(adjectives)}")
    print(f"Unique nouns: {len(nouns)}")
    print(f"Total unique words: {len(adjectives | nouns)}")
    print(f"\nAdjectives: {', '.join(sorted(adjectives))}")
    print(f"\nNouns: {', '.join(sorted(nouns))}")


if __name__ == "__main__":
    main()
