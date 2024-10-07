import random

#grid with empty cells
rows =5
cols = 5
grid = [[' ' for i in range(cols)] for j in range(rows)]

# Placing 'X' at a random cell
secret_row = random.randint(0, 4)
secret_col = random.randint(0, 4)
while (secret_row, secret_col) == (0, 0):
    secret_row, secret_col = random.randint(0, 4), random.randint(0, 4)
grid[secret_row][secret_col] = 'X'

# Initialize player position
player_row, player_col = 0, 0
moves = 10
found = False

print("Welcome to the game! Find the secret cell within 10 moves.")
print("You can move 'up', 'down', 'left', or 'right'.\n")

# Game loop
for i in range(moves):
    # Display current position
    print(f"Move {i+1}/{moves}: You are currently at ({player_row+1}, {player_col+1}).")

    # Get user input for the move
    move = input("Enter your move (up/down/left/right): ").strip().lower()

    # Update player position based on the move
    if move == 'up' and player_row > 0:
        player_row -= 1
    elif move == 'down' and player_row < rows - 1:
        player_row += 1
    elif move == 'left' and player_col > 0:
        player_col -= 1
    elif move == 'right' and player_col < cols - 1:
        player_col += 1
    else:
        print("Invalid move or out of bounds. Try again.")
        continue

    # Check if the player found the 'X'
    if (player_row, player_col) == (secret_row, secret_col):
        found = True
        print("Congratulations! You found the secret cell. You Win!")
        break
else:
    if not found:
        print("You have used all your moves. You Lose!")
