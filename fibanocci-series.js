function fibonacci(n) {
    const fibSeries = [0, 1];
    
    for (let i = 2; i < n; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
    
    return fibSeries.slice(0, n);
}

const n = 3;
const series = fibonacci(n);
console.log(series); 
