# Simple Guessing Game in PowerShell

# Function to generate a random number within a specified range
function Get-RandomNumber {
    param (
        [int]$min,
        [int]$max
    )
    Get-Random -Minimum $min -Maximum $max
}

# Clear the screen
Clear-Host

# Generate a random number between 1 and 100
$secretNumber = Get-RandomNumber -min 1 -max 100
<#
    Display text in the console with optional styling.
#>

# Output a string to the console with specified formatting
Write-Host "Hello, World!" `
           -ForegroundColor Green `   # Set the text color to green


# Welcome message
Write-Host @"
                   _. o  O  o    O o O
                  | |
     _____________| |___
    /___________________\
   /_____________________\                       ______  
  /_______________________\                  ___|__{|}_|
 /_________________________\                    | .  . |
/ |  ___              ___  |\                   |__-___|
  | |_|_|    ____    |_|_| |                      /|\    ___
  | |_|_|   |    |   |_|_| |                     / | \    |
  |         |    |         |                      / \    _|_
  |         |o   |         |                     /   \   \_/
  |_________|    |_________|
"@ -ForegroundColor Cyan

Write-Host "Welcome to the Guessing Game!"
Write-Host @"
==========================================================
+=                                                       -=
+=              __________                               -=
+=             |   ____   |                              -=
+=             |__|    |  |                              -=
+=                 ____|  |                              -=
+=                |   ____|                              -=
+=                |__|                                   -=
+=           __    __                   _____            -=
+=          |__|  |__|__    ________   |__   |           -=
+=                   |__|  |_____   |     |  |           -=
+=                               |  |_____|  |           -=
+=                               |___________|           -=
+=                                                       -=
==========================================================
"@ -ForegroundColor Red -BackgroundColor Green         
Write-Host "I've selected a number between 1 and 100..."

Write-Host @"
Can you guess it?
"@ -ForegroundColor Red -BackgroundColor Yellow


# Initialize variables
$attempts = 0
$guess = 0

# Main game loop
while ($guess -ne $secretNumber) {
    $guess = Read-Host "Enter your guess:"

    if ($guess -eq 'q') {
        Write-Host "Quitting the game. The secret number was $secretNumber."
        break
    }

    if ($guess -match '^\d+$') {
        $attempts++

        if ($guess -lt $secretNumber) {
            Write-Host "Too low! Try a higher number."
        }
        elseif ($guess -gt $secretNumber) {
            Write-Host "Too high! Try a lower number."
        }
        else {
            Write-Host "Congratulations! You guessed the secret number in $attempts attempts!"
        }
    }
    else {
        Write-Host "Invalid input. Please enter a valid number between 1 and 100, or 'q' to quit."
    }
}

# End of the game
Write-Host "Thanks for playing!"
