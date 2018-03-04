/**
 * Обработчики всех необходимых событий на странице
 **/

document.addEventListener('DOMContentLoaded', setInitial);
byId('building').addEventListener('ValueChange', handleBuildingTypeSelect);
byId('material').addEventListener('ValueChange', handleMaterialSelect);
byDataId('barnForm').addEventListener('click', handleBarnFormSelect);
byId('barnHeight').addEventListener('ValueChange', handleBarnHeightSelect);
byId('defaultPitch').addEventListener('click', handlePitchInput);
byId('pitch').addEventListener('input', handlePitchInput);
byId('height').addEventListener('ValueChange', handleFloorsSelect);
byId('length').addEventListener('input', handleSizeChange);
byId('width').addEventListener('input', handleSizeChange);
byDataId('setUp').addEventListener('input', handleSetUpChange);
byId('mrr').addEventListener('input', handleMrrChange);
byId('reset').addEventListener('click', setInitial);
byId('calculator').addEventListener('click', getTotal);
byDataId('current').addEventListener('click', handleCurrentSelect);
byId('depth').addEventListener('input', handleDepthInput);
