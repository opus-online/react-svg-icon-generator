import gulp from 'gulp';
import configureGenerator from './configureGenerator';

export default function configureSvgIcon (config) {
    gulp.task('svg-icon', configureGenerator(config));
}

export {
  configureGenerator
};
