
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

// Custom hook: controls the stopwatch
function useStopwatch(isRunning) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    // Cleanup stops the interval
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return seconds;
}

// PracticeTracker component
function PracticeTracker({ solved, onSolve, onReset }) {
  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Practice Tracker</Text>

      <Text style={styles.counter}>Solved: {solved}</Text>

      {solved >= 5 && (
        <Text style={styles.success}>Great job!</Text>
      )}

      <View style={styles.button}>
        <Button title="Solve +1" onPress={onSolve} />
      </View>

      <View style={styles.button}>
        <Button title="Reset" onPress={onReset} />
      </View>
    </View>
  );
}

// Stopwatch component
function Stopwatch({ seconds, isRunning }) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime =
    String(minutes).padStart(2, '0') +
    ':' +
    String(remainingSeconds).padStart(2, '0');

  return (
    <View style={styles.card}>
      <Text style={styles.sectionTitle}>Lab Stopwatch</Text>

      <Text style={styles.timer}>{formattedTime}</Text>

      {isRunning ? (
        <Text style={styles.running}>Running...</Text>
      ) : (
        <Text style={styles.paused}>Paused</Text>
      )}
    </View>
  );
}

// Parent component: owns the shared state
export default function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const seconds = useStopwatch(isRunning);

  const handleSolve = () => {
    setSolved((s) => s + 1);
  };

  const handleReset = () => {
    setSolved(0);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lab Timer & Practice Tracker</Text>

      <PracticeTracker
        solved={solved}
        onSolve={handleSolve}
        onReset={handleReset}
      />

      <Stopwatch
        seconds={seconds}
        isRunning={isRunning}
      />

      <View style={styles.controls}>
        <View style={styles.button}>
          <Button title="Start" onPress={handleStart} />
        </View>

        <View style={styles.button}>
          <Button title="Stop" onPress={handleStop} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#1E293B',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginBottom: 15,
    borderRadius: 12,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#334155',
  },
  counter: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  success: {
    fontSize: 20,
    textAlign: 'center',
    color: 'green',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  timer: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  running: {
    textAlign: 'center',
    color: 'green',
    fontSize: 18,
  },
  paused: {
    textAlign: 'center',
    color: '#64748B',
    fontSize: 18,
  },
  controls: {
    marginTop: 5,
  },
  button: {
    marginVertical: 5,
  },
});
