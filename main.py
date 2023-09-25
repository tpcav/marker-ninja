import librosa
import numpy as np
import matplotlib.pyplot as plt

# Load an audio signal
y, sr = librosa.load('test1.mp3')

# Set the threshold for peak detection
threshold = 0.3  # Adjust this value as needed

# Detect onsets in the signal using the specified threshold
onset_frames = librosa.onset.onset_detect(y=y, sr=sr, units='frames', onset_envelope=None, backtrack=False, pre_max=20, post_max=20, pre_avg=200, post_avg=200, delta=0.2, wait=0)

# Convert onset frames to timestamps
onset_times = librosa.frames_to_time(onset_frames, sr=sr)

# Round the onset timestamps to the nearest 2nd decimal
rounded_onset_times = [round(time, 2) for time in onset_times]

# Count the number of onsets
num_onsets = len(onset_frames)

# Print the number of onsets
print(f"Number of onsets: {num_onsets}")

# Print the rounded onset timestamps
print("Rounded onset timestamps (in seconds):")
for onset_time in rounded_onset_times:
    print(onset_time)

# Visualize the onset detection results
o_env = librosa.onset.onset_strength(y=y, sr=sr)
times = librosa.frames_to_time(np.arange(len(o_env)), sr=sr)

fig, ax = plt.subplots(nrows=2, sharex=True)
librosa.display.specshow(librosa.amplitude_to_db(np.abs(librosa.stft(y)), ref=np.max),
                         x_axis='time', y_axis='log', ax=ax[0])
ax[0].set(title='Power spectrogram')
ax[0].label_outer()
ax[1].plot(times, o_env, label='Onset strength')
ax[1].vlines(rounded_onset_times, 0, o_env.max(), color='r', alpha=0.9,
           linestyle='--', label='Onsets')
ax[1].legend()

plt.show()
