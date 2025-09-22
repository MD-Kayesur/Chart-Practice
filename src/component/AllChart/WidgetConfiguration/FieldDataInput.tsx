interface FieldDataInputProps {
  count: number;  
  selectedField: string; 
  values: string[];  
  onChange: (values: string[]) => void;  
}

export default function FieldDataInput({ count, selectedField, values, onChange }: FieldDataInputProps) {
   const adjustedValues = [...values];
  if (adjustedValues.length < count) {
     adjustedValues.push(...Array(count - adjustedValues.length).fill(''));
  } else if (adjustedValues.length > count) {
     adjustedValues.splice(count);
  }

   const handleInputChange = (index: number, value: string) => {
    const newValues = [...adjustedValues];
    newValues[index] = value;
     onChange(newValues);
  };

  return (
    <div className="space-y-2">
       {Array.from({ length: count }).map((_, idx) => (
        <input
          key={idx}
          type="text"
          placeholder={selectedField}
          className="w-full px-3 py-2 border border-gray-300 rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100"
          value={adjustedValues[idx] || ''}  
          onChange={(e) => handleInputChange(idx, e.target.value)}
        />
      ))}
    </div>
  );
}
