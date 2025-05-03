import random

def crush_game():
    print("Welcome to the Crush Game!")
    print("Try to guess who your secret crush is from the list below.\n")

    # List of potential crushes
    crushes = ["Alice", "Bob", "Charlie", "Diana", "Eve", "Frank", "Grace", "Hannah"]

    # Randomly select a crush
    secret_crush = random.choice(crushes)

    # Display the options to the player
    print("Here are the possible crushes:")
    for name in crushes:
        print(f"- {name}")
    print()

    attempts = 0
    while True:
        guess = input("Enter your guess: ").strip()

        attempts += 1

        if guess not in crushes:
            print("That's not on the list! Please choose a name from the list above.")
            continue

        if guess == secret_crush:
            print(f"Congratulations! You guessed it right. Your secret crush is indeed {secret_crush}!")
            print(f"You took {attempts} attempt(s) to find out.")
            break
        else:
            print("Nope, that's not your crush. Try again!")

if __name__ == "__main__":
    crush_game()
  
