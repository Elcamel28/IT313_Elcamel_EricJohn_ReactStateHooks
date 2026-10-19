
# IT313_Elcamel_EricJohn_ReactStateHooks

## Laboratory 5 - React State & Hooks in Action

### Problem
This project is a Lab Timer and Practice Tracker for students. It tracks the number of practice problems solved and the time spent working during laboratory sessions.

### Approach
The project uses React Native and Expo.

- useState stores the solved count, timer seconds, and running status.
- useEffect manages the stopwatch interval.
- clearInterval cleans up the interval when the stopwatch stops or the component unmounts.
- useStopwatch is a custom hook that manages timer logic.
- PracticeTracker displays the solved count, Solve +1 and Reset buttons, and the Great job! message.
- Stopwatch displays the elapsed time and running status.
- LabScreen owns the shared state and passes it to both child components.
- Event handlers update the state when buttons are pressed.

### How to Run
1. Install Node.js and Expo Go.
2. Open the project folder in VS Code.
3. Open the terminal in the project folder.
4. Install the project dependencies if needed:

   npm install

5. Start Expo:

   npx expo start

6. Scan the QR code using Expo Go on your phone.

### Testing
- Solve +1 increases the solved count.
- Reset returns the solved count to zero without resetting the timer.
- Great job! appears when five or more problems are solved.
- Start begins the stopwatch.
- Stop pauses the stopwatch.
- The cleanup function clears the timer interval.

### Technology Used
- React Native
- React Hooks
- Expo
- JavaScript
