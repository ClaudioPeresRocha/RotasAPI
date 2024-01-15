


    export function formatNumber(value){
        return new Intl.NumberFormat('pt-BR').format(value)

    }

    export function    formatCurrency(value){

        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    }

    export function formatDate(value){
        return new Intl.DateTimeFormat('pt-BR').format(value)
    }

    //export const urlAPI = 'http://localhost:3001';
    export const urlAPI = 'http://localhost:3100';
    

