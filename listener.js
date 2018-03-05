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
byId('resume').addEventListener('click', handleResume);
byId('calculator').addEventListener('click', getTotal);
byDataId('current').addEventListener('click', handleCurrentSelect);
byId('depth').addEventListener('input', handleDepthInput);
byDataId('needBracing').addEventListener('click', handleNeedBracingChange);
byDataId('pierBracing').addEventListener('click', handlePierBracingSelect);
byDataId('barnBracing').addEventListener('click', handleBarnBracingSelect);
byDataId('needPiping').addEventListener('click', handleNeedPipingChange);
byId('girderType').addEventListener('ValueChange', handleGirderTypeSelect);
byId('pipeType').addEventListener('ValueChange', handlePipeTypeSelect);
