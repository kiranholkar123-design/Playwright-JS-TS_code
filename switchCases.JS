

let browser = 'Opera';
switch (browser) {
    case 'chrome':
        console.log('launch the chrome');
    //break;
    case 'firefox':
        console.log('launch the firefox');
        break;
    case 'edge':
        console.log('launch the edge');
        break;
    case 'safari':
        console.log('launch the safari');
        break;
    default:
        console.log('Invalid browser');
        break;
    case 'opera':
        console.log('launch the opera');
        break;
}


//-------------------------------------

let marks = 95.35;

switch (true) {
    case (marks === 100):
        console.log('Grade: A++ and Eligible for the scholership');
        break;
    case (99 <= marks && marks >= 95):
        console.log('Grade: A++');
        break;
    case (94 <= marks && marks >= 90):
        console.log('Grade: A');
        break;


    default:
        break;
}