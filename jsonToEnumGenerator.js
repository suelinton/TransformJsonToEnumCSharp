
const fsLibrary  = require('fs') 

var subProcessos = _getJsonMacro();

var text = "public enum newEnum : int \n"
text += "{\n";

subProcessos.forEach((element)=>{

    // [Description("DF/Subsídio Apolice")]
    // DFSubsidioApolice = 877,
    text+= `[Description("${element.cod}")]\n`;
    text+= `${_getFormattedText(element.cod)} = ${element.id},\n`;
    text+="\n"
});

text += "}";

  
// Write data in 'newfile.txt' . 
fsLibrary.writeFile('newEnum.cs', text, (error) => { 
      
    // In case of a error throw err exception. 
    if (error) throw err; 
}) 

function _getFormattedText(str){
    var text = normalize(str);
    text = capital_letter(text).replace(/ /g,'');
    text = _removeEspecialCharacters(text);

    return text;
}

function _removeEspecialCharacters(str){
    return str.replace(/[^\w\s]/gi, '')
}

function normalize(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

function _getJson(){
    return [
        {"id": 1, "cod":"Oferta de produtos da Caixa Seguros Holding"
        },
        {"id": 2, "cod":"Oferta de produtos de parceiros da Caixa Seguros Holding"
        },
        {"id": 3, "cod":"Processo com uso de dados sensiveis"
        },
        {"id": 4, "cod":"Solicitação de Exclusão de Dados"
        },
        {"id": 5, "cod":"Abrir aviso de assistência"
        },
        {"id": 6, "cod":"Abrir aviso de sinistro"
        },
        {"id": 7, "cod":"Realizar aviso de sinistro lotérico e CCA"
        },
        {"id": 8, "cod":"Emitir apólice de seguro"
        },
        {"id": 9, "cod":"Emitir apólice lotérico e CCA"
        },
        {"id": 10, "cod":"Gerir comissionamento"
        },
        {"id": 11, "cod":"Gestão do risco"
        },
        {"id": 12, "cod":"Realizar análise de sinistro"
        },
        {"id": 13, "cod":"Realizar análise de sinistro lotérico e CCA"
        },
        {"id": 14, "cod":"Realizar cobrança de parcelas do seguro"
        },
        {"id": 15, "cod":"Realizar endosso"
        },
        {"id": 16, "cod":"Realizar endosso lotérico e CCA"
        },
        {"id": 17, "cod":"Realizar pagamento de adiantamento"
        },
        {"id": 18, "cod":"Realizar pagamento de indenização lotérico e CCA"
        },
        {"id": 19, "cod":"Realizar pagamento de indenização"
        },
        {"id": 20, "cod":"Realizar pagamento de indenização(autorizar serviço)"
        },
        {"id": 21, "cod":"Realizar pré-análise"
        },
        {"id": 22, "cod":"Realizar pré análise lotérico e CCA"
        },
        {"id": 23, "cod":"Realizar análise"
        },
        {"id": 24, "cod":"Realizar renovação da apólice"
        },
        {"id": 25, "cod":"Realizar venda de seguro"
        },
        {"id": 26, "cod":"Declinar proposta de seguro"
        },
        {"id": 27, "cod":"Aceitação (Apólice Específica)"
        },
        {"id": 28, "cod":"Aceitação (Endossos)"
        },
        {"id": 29, "cod":"Acionamento"
        },
        {"id": 30, "cod":"Acompanhamento"
        },
        {"id": 31, "cod":"Acompanhamento e Recurso"
        },
        {"id": 32, "cod":"Alteração de Dados"
        },
        {"id": 33, "cod":"Analisar proposta de seguro"
        },
        {"id": 34, "cod":"Atender Cliente"
        },
        {"id": 35, "cod":"Boleto/Debito em conta (Adesão e Demais Parcelas)"
        },
        {"id": 36, "cod":"Cadastrar Sinistro"
        },
        {"id": 37, "cod":"Cancelamento"
        },
        {"id": 38, "cod":"Cartão de Crédito (Demais Parcelas)"
        },
        {"id": 39, "cod":"Cobrar e Receber pagamentos Mensais"
        },
        {"id": 40, "cod":"Contábil"
        },
        {"id": 41, "cod":"Devolução"
        },
        {"id": 42, "cod":"Diferença de Parcela"
        },
        {"id": 43, "cod":"Disponibilização do informe de Rendimentos"
        },
        {"id": 44, "cod":"Emissão"
        },
        {"id": 45, "cod":"Emitir e Faturar"
        },
        {"id": 46, "cod":"Encerramento de Grupos"
        },
        {"id": 47, "cod":"Financeiro"
        },
        {"id": 48, "cod":"Gerir rescisões contratuais"
        },
        {"id": 49, "cod":"Informar a inauguração de grupos"
        },
        {"id": 50, "cod":"Leilão"
        },
        {"id": 51, "cod":"Liberar carta de crédito"
        },
        {"id": 52, "cod":"Manter atualizados os contratos"
        },
        {"id": 53, "cod":"Pagamento"
        },
        {"id": 54, "cod":"Pagamento ao consorciado ou beneficiário"
        },
        {"id": 55, "cod":"Pagamento de Indenização ou Serviços Adicionais"
        },
        {"id": 56, "cod":"Pagamento de prêmio acoplado"
        },
        {"id": 57, "cod":"Pagamento do bem - Automóvel"
        },
        {"id": 58, "cod":"Pagamentos Administrativos"
        },
        {"id": 59, "cod":"Pagar Assistência e Acoplados"
        },
        {"id": 60, "cod":"Pagar Comissão"
        },
        {"id": 61, "cod":"Pagar Comissão CCA"
        },
        {"id": 62, "cod":"Prospecção de parceiros"
        },
        {"id": 63, "cod":"Prover Benefício"
        },
        {"id": 64, "cod":"Realização de Pagamento"
        },
        {"id": 65, "cod":"Realizar subscrição de seguro"
        },
        {"id": 66, "cod":"Regulação (DFI)"
        },
        {"id": 67, "cod":"Regulação (MIP)"
        },
        {"id": 68, "cod":"Repassar Seguro e averbar cotas"
        },
        {"id": 69, "cod":"Resgate"
        },
        {"id": 70, "cod":"Resgate por óbito"
        },
        {"id": 71, "cod":"Sinistro - DFI"
        },
        {"id": 72, "cod":"Sinistro - Prestamista (Indenização)"
        },
        {"id": 73, "cod":"Sorteio(Pagamento de prêmio)"
        },
        {"id": 74, "cod":"Subscrição do Risco"
        },
        {"id": 75, "cod":"Transferência de titularidade de título de capitalização"
        },
        {"id": 76, "cod":"Venda agência Caixa"
        },
        {"id": 77, "cod":"Venda de Bilhete"
        },
        {"id": 78, "cod":"Venda de produtos"
        },
        {"id": 79, "cod":"Venda de Seguro de Vida (PF)"
        },
        {"id": 80, "cod":"Venda de Seguro de Vida (PJ)"
        },
        {"id": 81, "cod":"Venda de títulos de capitalização online"
        },
        {"id": 82, "cod":"Venda de títulos de capitalização por rotinas batch"
        },
        {"id": 83, "cod":"Venda de títulos de capitalização via canal PEC"
        },
        {"id": 84, "cod":"Venda parceiros - On-line"
        },
        {"id": 85, "cod":"Vendas FAP (Fontes)"
        },
        {"id": 86, "cod":"Aceitar"
        },
        {"id": 87, "cod":"Admissão"
        },
        {"id": 88, "cod":"Vender"
        },
        {"id": 89, "cod":"Analisar e Emitir Pareceres"
        },
        {"id": 90, "cod":"Aplicação (envio de currículo(linkedin/kenoby) hunting (linkedin) Recrutamento e Seleção"
        },
        {"id": 91, "cod":"Aplicative Youse Friends"
        },
        {"id": 92, "cod":"Aplicativo Youse Trips"
        },
        {"id": 93, "cod":"Assistência"
        },
        {"id": 94, "cod":"Assistências 24h"
        },
        {"id": 95, "cod":"Atendimento ao Beneficiário e Prestador"
        },
        {"id": 96, "cod":"Atendimento ao cliente"
        },
        {"id": 97, "cod":"Auditoria e Gestão do Processamento de Contas"
        },
        {"id": 98, "cod":"Avaliação de Desempenho"
        },
        {"id": 99, "cod":"Aviso e Regulação de Sinistro"
        },
        {"id": 100, "cod":"Benefícios"
        },
        {"id": 101, "cod":"Benefícios (Sorteio capitalização e cartão Previsul de vantagens)"
        },
        {"id": 102, "cod":"Biblioteca"
        },
        {"id": 103, "cod":"Bliive"
        },
        {"id": 104, "cod":"Cobrança"
        },
        {"id": 105, "cod":"Conhecer e responder demandas oficiais de órgãos regulamentadores"
        },
        {"id": 106, "cod":"Consultoria de Remuneração Pesquisas salariais"
        },
        {"id": 107, "cod":"Contratação/manutenção"
        },
        {"id": 109, "cod":"Contratos"
        },
        {"id": 110, "cod":"Desenvolvimento"
        },
        {"id": 111, "cod":"Desligamento"
        },
        {"id": 112, "cod":"Elaboração e Atualização dos contratos de prestadores Dentistas"
        },
        {"id": 113, "cod":"Emissão de apólice"
        },
        {"id": 114, "cod":"Emissão de certificado"
        },
        {"id": 115, "cod":"Emissão de certificado individual"
        },
        {"id": 116, "cod":"Endosso"
        },
        {"id": 117, "cod":"Entregas legais(SUSEP)"
        },
        {"id": 118, "cod":"Envio base para Parceiro"
        },
        {"id": 119, "cod":"Envio de Indicadores de controle"
        },
        {"id": 120, "cod":"Escola online"
        },
        {"id": 121, "cod":"Folha de pagamento (férias/admissão etc..) Monitoração (controle de jornada)"
        },
        {"id": 122, "cod":"Formulários Site Odonto Empresas"
        },
        {"id": 123, "cod":"Gerenciamento de Produto"
        },
        {"id": 124, "cod":"Gerenciar os Processos Judiciais"
        },
        {"id": 125, "cod":"Gerir cessão e aceitação de cosseguro e resseguro"
        },
        {"id": 126, "cod":"Gerir disponibilização de informações de interesse de clientes"
        },
        {"id": 127, "cod":"Gerir processos judiciais e contencioso"
        },
        {"id": 128, "cod":"Gerir reclamações e sugestões"
        },
        {"id": 129, "cod":"Gerir reclamações e sugestões de beneficiários"
        },
        {"id": 130, "cod":"Gerir reclamações e sugestões de clientes"
        },
        {"id": 131, "cod":"Gerir recuperação e repasse de cosseguro e resseguro"
        },
        {"id": 132, "cod":"Gestão da Transmissão de dados Informe TISS e SIB"
        },
        {"id": 133, "cod":"Gestão das reclamações dos prestadores dentistas"
        },
        {"id": 134, "cod":"Gestão de Terceiros"
        },
        {"id": 135, "cod":"Informe de rendimento anual - Dmed"
        },
        {"id": 136, "cod":"Integração e Qualificação do Ambiente & Construção dos Modelos de Prospecção e Segmentação de Clientes"
        },
        {"id": 137, "cod":"Jurídico Trabalhista"
        },
        {"id": 138, "cod":"Oferta de Produtos da CSH sem convergência com o Produto do Cliente"
        },
        {"id": 139, "cod":"Operação das Ações nos Diversos Canais (Presencial, Remoto e Digital)"
        },
        {"id": 140, "cod":"Ouvidoria"
        },
        {"id": 141, "cod":"Pagamento do Sinistro"
        },
        {"id": 142, "cod":"Pareceres"
        },
        {"id": 143, "cod":"Pesquisa de satisfação"
        },
        {"id": 144, "cod":"Pesquisa de Saúde Organizacional"
        },
        {"id": 145, "cod":"Pré-aviso de Sinistro"
        },
        {"id": 146, "cod":"Processos atuariais"
        },
        {"id": 147, "cod":"Prospecção de Corretores"
        },
        {"id": 148, "cod":"Recuperação de Ativos"
        },
        {"id": 149, "cod":"Recuperação de Ativos - Leilão"
        },
        {"id": 150, "cod":"Regulação de Sinistro"
        },
        {"id": 151, "cod":"Renovação"
        },
        {"id": 152, "cod":"Seleção"
        },
        {"id": 153, "cod":"Serviços Médicos"
        },
        {"id": 154, "cod":"Sinistro"
        },
        {"id": 155, "cod":"Venda"
        },
        {"id": 156, "cod":"Venda de Planos Odontológicos"
        },
        {"id": 157, "cod":"Venda de Planos Odontológicos - diretamente pessoa física"
        }
    ]
}

function _getJsonMacro() {
    return [

        { "id": 1, "cod": "Venda e Emissão" },
        { "id": 2, "cod": "Atendimento e Endosso" },
        { "id": 3, "cod": "Cobrança" },
        { "id": 4, "cod": "Sinistro e Assistência" },
        { "id": 5, "cod": "Resgate" },
        { "id": 6, "cod": "Sorteio e Contemplação" },
        { "id": 7, "cod": "Cancelamento e Devolução" },
        { "id": 8, "cod": "Comissionamento" },
        { "id": 9, "cod": "Reportes Oficiais e Jurídicos" },
        { "id": 10, "cod": "Atuarial" },
        { "id": 11, "cod": "Rentabilização" },
        { "id": 12, "cod": "Gestão de RH" },
        { "id": 13, "cod": "Gestão de Produtos" },

    ]
}