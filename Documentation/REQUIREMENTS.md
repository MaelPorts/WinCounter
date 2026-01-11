# Requirements Specification

## Functional Requirements

### FR1: Player Name Input

- **FR1.1**: System shall prompt for Player 1 name input
- **FR1.2**: System shall prompt for Player 2 name input
- **FR1.3**: System shall validate that both names are entered before allowing counter start
- **FR1.4**: System shall display a "Start Counter" button after both names are entered

### FR2: Statistics Display

- **FR2.1**: System shall display both player names prominently
- **FR2.2**: System shall display Win count for each player
- **FR2.3**: System shall display Loss count for each player
- **FR2.4**: System shall display Draw count for each player
- **FR2.5**: System shall display a message indicating who won the last game

### FR3: Game Recording

- **FR3.1**: System shall provide a button to record Player 1 win
- **FR3.2**: System shall provide a button to record Player 2 win
- **FR3.3**: When Player 1 button is clicked:
  - Increment Player 1 wins by 1
  - Increment Player 2 losses by 1
  - Update last game message to show Player 1 won
- **FR3.4**: When Player 2 button is clicked:
  - Increment Player 2 wins by 1
  - Increment Player 1 losses by 1
  - Update last game message to show Player 2 won

### FR4: Dynamic Updates

- **FR4.1**: All statistics shall update immediately upon button click
- **FR4.2**: Last game message shall update immediately upon button click
- **FR4.3**: No page refresh should be required for updates

## Non-Functional Requirements

### NFR1: Performance

- Button clicks shall register and update UI within 100ms

### NFR2: Usability

- Interface shall be intuitive and require no instructions
- Buttons shall be large enough for easy clicking during gameplay
- Text shall be readable from a typical gaming distance

### NFR3: Data Persistence (Optional)

- Statistics may persist between sessions
- Player names may be saved for quick restart

## User Interface Layout

### Setup Screen

```
┌─────────────────────────────────────┐
│                                     │
│     FIFA Win Counter Setup          │
│                                     │
│  Player 1 Name: [_____________]     │
│                                     │
│  Player 2 Name: [_____________]     │
│                                     │
│        [Start Counter]              │
│                                     │
└─────────────────────────────────────┘
```

### Counter Screen

```
┌─────────────────────────────────────┐
│   Player 1          Player 2        │
│     [Name]            [Name]        │
│                                     │
│  W: 5  L: 3  D: 1   W: 3  L: 5  D: 1│
│                                     │
│   "Player 1 won the last game!"     │
│                                     │
│  [Player 1]        [Player 2]       │
│    Button            Button         │
│                                     │
└─────────────────────────────────────┘
```

## Data Model

### Player Object

```
{
  name: string,
  wins: number,
  losses: number,
  draws: number
}
```

### Game State

```
{
  player1: Player,
  player2: Player,
  lastWinner: string | null  // "player1", "player2", or "draw"
}
```

## Button Actions Flow

### Player 1 Button Click

1. User clicks Player 1 button
2. System increments player1.wins
3. System increments player2.losses
4. System sets lastWinner to "player1"
5. System updates UI to reflect new statistics
6. System updates message to show Player 1 won

### Player 2 Button Click

1. User clicks Player 2 button
2. System increments player2.wins
3. System increments player1.losses
4. System sets lastWinner to "player2"
5. System updates UI to reflect new statistics
6. System updates message to show Player 2 won

### Draw Scenario (if implemented)

1. User clicks Draw button
2. System increments player1.draws
3. System increments player2.draws
4. System sets lastWinner to "draw"
5. System updates UI to reflect new statistics
6. System updates message to show "Last game was a draw"
