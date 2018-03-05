/**
 * Обработчики всех необходимых событий на странице
 **/

document.addEventListener('DOMContentLoaded', setInitial);
byId('building').addEventListener('input', handleBuildingTypeSelect);
byId('material').addEventListener('input', handleMaterialSelect);
byDataId('barnForm').addEventListener('click', handleBarnFormSelect);
byId('barnHeight').addEventListener('input', handleBarnHeightSelect);
byId('defaultPitch').addEventListener('click', handlePitchInput);
byId('pitch').addEventListener('input', handlePitchInput);
byId('height').addEventListener('input', handleFloorsSelect);
byId('length').addEventListener('input', handleSizeChange);
byId('width').addEventListener('input', handleSizeChange);
byDataId('setUp').addEventListener('click', handleSetUpChange);
byId('mrr').addEventListener('input', handleMrrChange);
byId('reset').addEventListener('click', setInitial);
byId('back').addEventListener('click', getBack);
byId('resume').addEventListener('click', handleResume);
byId('calculator').addEventListener('click', getTotal);
byDataId('current').addEventListener('click', handleCurrentSelect);
byId('depth').addEventListener('input', handleDepthInput);
byDataId('needBracing').addEventListener('click', handleNeedBracingChange);
byDataId('pierBracing').addEventListener('click', handlePierBracingSelect);
byDataId('barnBracing').addEventListener('click', handleBarnBracingSelect);
byDataId('needPiping').addEventListener('click', handleNeedPipingChange);
byId('girderType').addEventListener('input', handleGirderTypeSelect);
byId('pipeType').addEventListener('input', handlePipeTypeSelect);
