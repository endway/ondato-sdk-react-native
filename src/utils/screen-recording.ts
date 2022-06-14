import RecordScreen from 'react-native-record-screen';

export const startScreenRecording = () => {
  return RecordScreen.startRecording({ mic: false });
};

export const stopScreenRecording = async () => {
  const response = await RecordScreen.stopRecording();
  if (response.status !== 'success') return;
  return response.result.outputURL;
};

export const cleanScreenRecording = () => {
  return RecordScreen.clean();
};
