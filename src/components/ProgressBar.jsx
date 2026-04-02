const ProgressBar = ({ progress }) => {
  return (
    <div>
      <label htmlFor="habit-progress">Progreso de hoy: {progress}%</label>
      <progress 
        id="habit-progress" 
        max="100" 
        value={progress}
      >
        {progress}%
      </progress>
    </div>
  );
};

export default ProgressBar