import angular from 'angular';
import s from './index.less';

const ngModule = angular.module('app', []);

import directives from './directives';
directives(ngModule);
