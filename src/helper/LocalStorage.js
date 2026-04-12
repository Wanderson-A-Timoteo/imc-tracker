
// Verifica se o naveador suporta localStorage
function isLocalStorageAvailable() {

  try {
    return typeof localStorage !== 'undefined';
  } catch (error) {
    return false;
  }
}

/**
 * Recupear dados do localStorage
 */
export function getData(key) {

  if (!isLocalStorageAvailable()) {
    return null;
  }

  try {
    // Recuperar o valor armazenado no navegador
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
    
  } catch (error) {
    // Log do erro em caso de falha
    console.error('Erro ao recuperar item do localStorage:', error);
    return null;
  }
}


/**
 * Armazena dados no localStorage
 */

export function storeData(key, item) {

  try {
    //  Converter o item para JSON e salvar no navegador
    localStorage.setItem(key, JSON.stringify(item));
  } catch (error) {
    // Log do erro em caso de falha
    console.error('Erro ao gravar item no localStorage:', error);
  }
}

