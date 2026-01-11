# FIFA Win Counter App

A simple application to track wins, losses, and draws between two players in FIFA games.

## Overview

This app allows two players to track their FIFA match statistics in real-time with a clean, easy-to-use interface.

## Features

- **Player Setup**: Enter names for both players before starting
- **Live Statistics Tracking**: Track wins, losses, and draws for both players
- **Last Game Result**: Display which player won the most recent match
- **Simple Interface**: Quick-tap buttons to record match results
- **Dynamic Updates**: Statistics update instantly after each game

## User Flow

### 1. Initial Setup

- User is prompted to enter Player 1's name
- User is prompted to enter Player 2's name
- "Start Counter" button becomes available once both names are entered

### 2. Counter Screen

Once the counter starts, the screen displays:

- **Player Names**: Both player names at the top
- **Statistics**: Win/Loss/Draw counts for each player
- **Last Game Status**: Text showing who won the previous match
- **Action Buttons**:
  - Left button: Mark Player 1 as winner
  - Right button: Mark Player 2 as winner
  - (Optional) Center button: Mark as draw

## Technical Requirements

### Display Elements

1. Player 1 Name (left side)
2. Player 2 Name (right side)
3. Player 1 Stats: W/L/D
4. Player 2 Stats: W/L/D
5. Last game result text (e.g., "Player 1 won the last game!")
6. Player 1 button (left)
7. Player 2 button (right)

### Functionality

- Clicking Player 1 button:
  - Increments Player 1 wins
  - Increments Player 2 losses
  - Updates "last game" message
- Clicking Player 2 button:
  - Increments Player 2 wins
  - Increments Player 1 losses
  - Updates "last game" message
- (Optional) Draw button:
  - Increments draw count for both players

## Future Enhancements (Optional)

- Match history log
- Reset counter option
- Export statistics
- Multiple player profiles
- Session timer
- Win streaks tracking
