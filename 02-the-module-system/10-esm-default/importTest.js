// 如果logger.js只有一个默认导出项，也可以使用下面的方式来导入
//import { default as MyLogger} from './logger.js';
import MyLogger from './logger.js';

const logger = new MyLogger();
logger.log('message');