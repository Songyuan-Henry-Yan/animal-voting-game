# Animal Kingdom Election: Who Will Care for the Forest?

**Animal Kingdom Election** is a playable, English-language educational web game for children in the United States. Students enter a storybook forest where animal candidates run for forest president, voters fill out rich ballots, and the same ballots are counted by different voting rules.

Core learning message:

> **Same voters. Same ballots. Different voting rules. Will the same animal win?**

The game is not about which political side is correct. It is a neutral, nonpartisan civics activity about how voting rules shape democratic outcomes, how campaign promises have costs and tradeoffs, and why democratic communities need fair rules, private ballots, fact-checking, basic rights, and peaceful acceptance of results.

## What students do in the game

Students move along a forest path with eight steps:

1. **Welcome** — Start with a fixed Teaching Example or create a seeded random election.
2. **Setup** — Choose an age mode, number of candidates, number of issues, simulated voter count, polarization level, seed, campaign events, budget limits, Forest Charter reminders, Teacher Mode, and voting systems.
3. **Issues** — Read child-friendly forest issue cards such as Snack Sharing, the Forest Nurse Station, the Robot Parrot, Big Megaphone Ads, and the Forest Budget.
4. **Candidates** — Meet animal candidates, read slogans, strengths, tradeoffs, values, acorn-budget promises, and gentle Forest Charter reminders when needed.
5. **Campaign Events** — See 2–3 optional story events that affect issue importance, trust, or visibility before ballots are generated.
6. **Voting Systems** — Compare selected voting rules and preview a generated ranked ballot.
7. **Results** — See which animal wins under each voting rule, compare support metrics, expand round-by-round counting details, and discuss why outcomes differ.
8. **Reflection** — Use discussion questions and Teacher Mode notes for classroom or family conversation.

## Educational goal

The game helps students understand that:

- A candidate with the most first-choice votes may not be acceptable to most voters.
- A compromise candidate may win under some systems.
- Ranked ballots, approval ballots, score ballots, and proportional representation express different kinds of voter preferences.
- Every voting system has tradeoffs.
- Democracy is more than majority rule; it also needs fair rules, basic rights, private ballots, fact-checking, peaceful transfer of power, and respect for smaller groups.
- Campaign promises should be checked against costs and consequences.

## How the simulation works

For each random election, the app uses the selected seed to create the same reproducible election every time:

1. Selects candidates from the animal candidate pool.
2. Selects forest issues.
3. Generates three campaign promises per candidate from local templates.
4. Draws optional campaign events.
5. Simulates voter households from animal voter groups.
6. Creates one rich ballot per simulated voter.
7. Reuses those same ballots for every selected voting system.

Each rich ballot includes:

- A full candidate ranking.
- A list of approved candidates.
- A 0–5 score for every candidate.
- Favorite issues for that voter.

No external AI, external data, backend, database, login, or external images are used.

## Age modes

- **Ages 6–8: Story Mode** — fewer candidates, simpler language, and a focus on favorites, okay choices, sharing, rules, and fairness.
- **Ages 9–11: Classroom Election Mode** — the main classroom experience with five candidates, six issues, and core voting systems.
- **Ages 12–14: Voting Systems Lab** — more candidates, more issues, and advanced systems such as STAR, Condorcet matchups, and proportional council seats.

## Voting systems implemented

1. **Choose-One Voting / Plurality** — each ballot counts only the first choice; the candidate with the most first-choice votes wins.
2. **Two-Round Runoff** — if nobody has more than half in round one, the top two candidates have a final round.
3. **Ranked Choice Voting / Instant Runoff Voting** — the lowest candidate is eliminated each round and ballots transfer to next active choices until someone has a majority.
4. **Approval Voting** — voters can approve every candidate they find acceptable; the most approvals wins.
5. **Score Voting** — voters give every candidate 0–5 stars; the highest total score wins.
6. **STAR Voting** — score totals choose two finalists, then an automatic runoff chooses the finalist preferred by more voters.
7. **Borda Count** — candidates earn points from ranking position; the highest point total wins.
8. **Condorcet Matchups** — every pair of candidates is compared head-to-head; if no candidate beats all others, the game labels and uses a Copeland fallback.
9. **Proportional Forest Council** — a seven-seat council is allocated with D’Hondt using first-choice votes.

All systems count the same generated ballots for the same election seed.

## Results dashboard

The Results page is designed to make the core lesson visible. It includes:

- A winner comparison table.
- A “different winners” notice when rules choose different animals.
- Favorite fans, approval rate, average stars, friendly matchup wins, and very unhappy voter metrics.
- Counting difficulty stars.
- Expandable round-by-round explanations for each voting system.
- Council seat display for the proportional council rule.
- A neutral reminder that no voting rule is always best; different rules reward different democratic values.

## Teaching Example

The fixed Teaching Example uses 100 compressed voters and five candidates: Flynn Fox, Penny Panda, Olive Owl, Leo Lion, and Dolly Dolphin.

Expected classroom outcomes:

| Voting rule | Expected winner | Lesson |
| --- | --- | --- |
| Choose-One / Plurality | Flynn Fox | Flynn has the most first-choice fans at 28%, but not a majority. |
| Ranked Choice / IRV | Olive Owl | Transfers can change the winner when lower candidates leave the race. |
| Borda Count | Dolly Dolphin | A broadly acceptable candidate can earn many ranking points. |
| Condorcet Matchups | Dolly Dolphin | Dolly beats every other candidate one-on-one in this example. |

This example is designed to show that the candidate with the most first-choice votes is not always the candidate most voters can accept.

## Teacher Mode

Teacher Mode adds:

- Formal voting system names.
- Real-world connection notes on issue cards.
- Longer strengths and weaknesses.
- A nonpartisan classroom note.
- Discussion prompts for comparing simplicity, majority support, broad acceptability, strong feelings, compromise, and representation.

Teacher Mode stays neutral and does not mention real political parties, real politicians, real campaigns, or partisan slogans.

## Forest Charter

The Forest Charter reminds students that democracy needs rules and rights, not only vote totals. It includes child-friendly principles such as private ballots, no voter threats, explaining the voting rule before the election, checking facts, and protecting basic safety for smaller groups.

When a generated policy has a rights-risk flag, the game shows a gentle reminder:

> Forest Charter Reminder: This idea might make some animals feel that their basic rights are not safe. Can it be written in a fairer way?

## Candidate and issue design

The candidate pool includes 10 animal candidates, each with strengths, tradeoffs, values, visual descriptions, and value-axis scores. No animal is presented as evil, stupid, or morally superior. The issues are children’s story equivalents for civic topics:

- Snack Sharing for inequality and public support.
- Forest Nurse Station for health care access.
- New Animals in the Forest for community belonging and rules.
- River and Old Trees for environment and development.
- Robot Parrot for AI, misinformation, and fact-checking.
- Big Megaphone Ads for money in campaigns.
- Berry Bridge for trade and cooperation.
- Forest Budget for public spending and budget limits.

## Accessibility and classroom use

The UI uses large readable text, keyboard-accessible controls, visible focus states, responsive cards, mobile-friendly layouts, print-friendly styles, and reduced-motion-friendly CSS. The Results and Reflection pages include a **Print Summary** button for classroom handouts.

Classroom suggestions:

- Run the Teaching Example first and ask students why different rules picked different animals.
- Ask which rule was easiest to understand and which rule collected the most information.
- Compare a low-polarization random election with a high-polarization random election.
- Use the Forest Charter to discuss why majority rule still needs basic rights and fair procedures.
- Ask students to identify which promises cost acorns and what tradeoffs might follow.

## Nonpartisan design

The game does not support or criticize any real-world political party, politician, ideology, or current campaign. It uses animal candidates, forest issues, acorn budgets, and storybook examples instead of real parties or real candidates.

## Data and assets

No backend, database, login, external API, external data feed, external image asset, copyrighted art, real politician photo, or party logo is used. Artwork is made from CSS, emoji, and inline SVG-style/local UI components.

## How to run

```bash
npm install
npm run dev
npm run build
npm run self-check
```

## Known limitations and future ideas

- The voter model is a simplified simulation for learning, not a prediction model.
- The proportional council uses candidates as child-friendly stand-ins for lists or groups.
- Future versions could add more classroom worksheets, more visual charts, and optional teacher-created election scenarios.

## Self-check command

`npm run self-check` runs a build, verifies the Teaching Example winners, confirms all nine voting systems execute, checks that voting systems do not mutate ballots, scans for Chinese characters, and scans for a short list of banned real-party or real-politician references.
