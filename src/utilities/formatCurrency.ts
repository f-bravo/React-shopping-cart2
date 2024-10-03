const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {currency: "BRL", style: "currency"})

//Função para formatar o valor
export function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number)
}