export const yTickFormatter = (value: number) => {
  const desiredTicks = [0, 250, 500, 750, 1000, 1250, 1500, 1750];
  return desiredTicks.includes(value) ? value : '';
};

export const copyDataToClipboard = async (data: any[]) => {
  const headers = ['Month', 'Globex Inc', 'Oceanic Airlines'];
  const keys = ['name', 'Globex', 'Oceanic'];
  const headerRow = headers.join(',');

  const dataRows = data.map(d => 
      keys.map(key => {
          let value = d[key];
          if (typeof value === 'string' && (value.includes(',') || value.includes('"') || value.includes('\n'))) {
              return `"${value.replace(/"/g, '""')}"`;
          }
          return value;
      }).join(',')
  ).join('\n');

  const csvData = `${headerRow}\n${dataRows}`;

  try {
      await navigator.clipboard.writeText(csvData);
      return true;
  } catch (err) {
      console.error('Failed to copy data:', err);
      return false;
  }
};
