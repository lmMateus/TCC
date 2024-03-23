import * as tituloController from '../controller/titulos.js';

const router = createRouter();

router.get('/titulos', defineEventHandler(tituloController.getTitles));
router.get('/teste/:cod_titulo', defineEventHandler(tituloController.getTitleByCod));

export default useBase("/api/v1", router.handler);