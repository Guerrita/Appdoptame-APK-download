
export default function Form({ children, currentStep, prevFormStep }) {
  return (
    <div className=''>
      {currentStep < 3 && (
        <>
          {currentStep > 0 && (
            <button
              className=''
              onClick={prevFormStep}
              type="button"
            >
              back
            </button>
          )}

          <span className=''>Step {currentStep + 1} of 3</span>
        </>
      )}
      {children}
    </div>
  );
}
