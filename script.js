// Create function for calculating GDP
function gdpCalc(c,i,g,nx) {
	const gdp = c+i+g+nx;
	return gdp
}

// Using some test variables 
const c = 10;
const i = 20;
const g = 120;
const nx = -12;

// Calling GDPCalc function
const GDP = gdpCalc(c,i,g,nx);


// Output to console
console.log(`Total GDP: ${GDP}`);