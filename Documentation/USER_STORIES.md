# User Stories

## Epic: FIFA Match Tracking

### Story 1: Set Up Players

**As a** FIFA player  
**I want to** enter my name and my opponent's name  
**So that** we can start tracking our match statistics

**Acceptance Criteria:**

- [ ] I can enter Player 1's name in a text input field
- [ ] I can enter Player 2's name in a text input field
- [ ] The "Start Counter" button is visible after entering both names
- [ ] The "Start Counter" button is disabled until both names are entered
- [ ] Clicking "Start Counter" takes me to the counter screen

---

### Story 2: View Match Statistics

**As a** FIFA player  
**I want to** see the current win/loss/draw statistics for both players  
**So that** I can track who is ahead in our gaming session

**Acceptance Criteria:**

- [ ] Both player names are displayed clearly
- [ ] Each player's win count is visible
- [ ] Each player's loss count is visible
- [ ] Each player's draw count is visible
- [ ] All statistics start at 0 when the counter begins
- [ ] Statistics are updated in real-time after each game

---

### Story 3: Record Player 1 Win

**As a** FIFA player  
**I want to** quickly record when Player 1 wins a match  
**So that** the statistics are kept up to date

**Acceptance Criteria:**

- [ ] There is a clearly labeled button for Player 1
- [ ] The button is positioned on the left side of the screen
- [ ] Clicking the button increments Player 1's win count by 1
- [ ] Clicking the button increments Player 2's loss count by 1
- [ ] The last game message updates to show "Player 1 won the last game!"
- [ ] The update happens immediately without page refresh

---

### Story 4: Record Player 2 Win

**As a** FIFA player  
**I want to** quickly record when Player 2 wins a match  
**So that** the statistics are kept up to date

**Acceptance Criteria:**

- [ ] There is a clearly labeled button for Player 2
- [ ] The button is positioned on the right side of the screen
- [ ] Clicking the button increments Player 2's win count by 1
- [ ] Clicking the button increments Player 1's loss count by 1
- [ ] The last game message updates to show "Player 2 won the last game!"
- [ ] The update happens immediately without page refresh

---

### Story 5: Track Last Game Result

**As a** FIFA player  
**I want to** see who won the most recent match  
**So that** I can quickly verify the last result if needed

**Acceptance Criteria:**

- [ ] A message displays beneath the statistics
- [ ] The message shows who won the last game (e.g., "Player 1 won the last game!")
- [ ] The message updates immediately when a button is clicked
- [ ] Before any games are played, the message shows "No games played yet" or similar
- [ ] The message clearly distinguishes between Player 1, Player 2, and Draw (if applicable)

---

## Optional User Stories

### Story 6: Record Draw

**As a** FIFA player  
**I want to** record when a match ends in a draw  
**So that** all match outcomes are accurately tracked

**Acceptance Criteria:**

- [ ] There is a button to record a draw (positioned between player buttons)
- [ ] Clicking the button increments draw count for both players by 1
- [ ] The last game message updates to show "Last game was a draw!"
- [ ] Win and loss counts remain unchanged

---

### Story 7: Reset Counter

**As a** FIFA player  
**I want to** reset all statistics to start fresh  
**So that** I can begin a new gaming session

**Acceptance Criteria:**

- [ ] There is a "Reset" button visible on the counter screen
- [ ] Clicking reset shows a confirmation dialog
- [ ] Confirming reset sets all W/L/D counts back to 0
- [ ] The last game message is cleared
- [ ] Player names are retained (optional: allow name change)

---

### Story 8: View Match History

**As a** FIFA player  
**I want to** see a log of all matches played  
**So that** I can review the session's progression

**Acceptance Criteria:**

- [ ] A "History" button or section is available
- [ ] History shows each game result with timestamp
- [ ] History shows which player won each game
- [ ] History can be cleared separately from current statistics
