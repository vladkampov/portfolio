import angular from 'angular';
import s from '!style!css!sass!./index.scss'

const ngModule = angular.module('app', []);

import directives from './directives';
directives(ngModule);
