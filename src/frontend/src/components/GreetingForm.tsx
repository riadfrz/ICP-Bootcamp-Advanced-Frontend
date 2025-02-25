import React from "react";

interface GreetingFormProps {
  handleSubmit: (event: React.FormEvent) => void;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  greeting: string;
}

const GreetingForm: React.FC<GreetingFormProps> = ({ handleSubmit, inputValue, setInputValue, greeting }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Enter your name
          </label>
          <input
            id="name"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Greet Me!
        </button>
      </form>
      {greeting && (
        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Greeting:</h2>
          <p className="text-gray-700">{greeting}</p>
        </div>
      )}
    </div>
  );
};

export default GreetingForm;
