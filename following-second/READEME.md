Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

This is not as simple as it seems... Look at the following results to see for yourself:

14h17m59s should give 14h18m0s
6h59m59s should give 7h0m0s
23h59m59s should give 0h0m0s (midnight)

- Ask the user for an hour then store it, then ak for min from 1-60 then store it, then ask for a sec from 1-60 then store it.

- if the seconds are 59 then increment by one the minutes and set the secons to 0, else just increment seconds by one.

- we check if the minutes are 59, if so we increment hours by one and set minutes to 0

- if hours is equal to 24 set it to 0

- Lastly, show it on the screen.
