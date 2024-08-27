EUR_TO_USD = 1.12

function convertEuroToDollars_1(euroString) {
    // Remove the Euro symbol
    euroValue = euroString.replace('€', '');
    euroValue = euroValue.replace(',', '');

    // Convert to a floating-point number
    euroFloat = parseFloat(euroValue);
    // Multiply by the conversion rate (EUR_TO_USD)
    dollarValue = euroFloat * EUR_TO_USD;

    // Convert to an integer and add the dollar sign

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    
    return formatter.format(dollarValue);
}




(function () {
    if (window.location.href == 'https://de.scalable.capital/broker/' || window.location.href == 'https://de.scalable.capital/broker') {
        sidebar_nw = document.querySelector('div[aria-labelledby="side-navigation-product-list"]');
        sidebar_nw = sidebar_nw.querySelector('a[href="/broker"]');
        sidebar_nw = sidebar_nw.querySelectorAll('div[class*="AuroraProductListLabel-rightText"]')[0];
        amount = convertEuroToDollars_1(sidebar_nw.innerText);
        sidebar_nw.innerText = amount;


        dashboard_main = document.querySelector('div[data-testid="formatted-number"]');
        dashboard_decimal = document.querySelector('div[class*="AuroraLargePrice-xlFontSize"]')
        cockpit_nw_usd_text_main = amount.split('.')[0];
        dashboard_main.innerText = cockpit_nw_usd_text_main;
        dashboard_decimal.innerText = amount.split('.')[1];

        dashboard_euro_symbol = document.querySelector('div[class*="css-85ijw0-AuroraLargePrice-xlFontSize"]');
        dashboard_euro_symbol.innerText = '';


    } else if (window.location.href == 'https://de.scalable.capital/cockpit/') {

        // Sidebar
        sidebar_nw = document.querySelector('div[aria-labelledby="side-navigation-product-list"]');
        sidebar_nw = sidebar_nw.querySelector('a[href="/broker/"]');
        sidebar_nw = sidebar_nw.querySelectorAll('div[class*="MuiGrid-item"]')[1];
        sidebar_nw.innerText = convertEuroToDollars_1(sidebar_nw.innerText);

        // Cockpit
        cockpit_nw = document.querySelector('div[data-testid="currency-superscript"]');
        cockpit_nw_euro_text = cockpit_nw.innerText;
        cockpit_nw_euro_text = cockpit_nw_euro_text.replace(/\n/g, '');
        
        cockpit_nw_usd_text = convertEuroToDollars_1(cockpit_nw_euro_text);
        cockpit_nw_usd_text_decimal = cockpit_nw_usd_text.split('.')[1];
        cockpit_nw_usd_text_main = cockpit_nw_usd_text.split('.')[0];


        // cockpit_nw_decimal = document.querySelector('div[class*="jss65"]');
        // cockpit_nw_decimal.innerText = cockpit_nw_usd_text_decimal;


        cockpit_nw_main = cockpit_nw.querySelectorAll('div:not([class]):not([innerHTML=""])')[1];
        cockpit_nw.innerText = cockpit_nw_usd_text_main;
    }
})();