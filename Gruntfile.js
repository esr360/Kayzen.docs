/**
 * Kayzen User Guide
 * Grunt Setup
 * @uthor Edmund Reed | @esr360
 */

module.exports = function(grunt) {

    /**
     * Config
     */
    
    // 'dev' | 'prod' - used to determine asset minification
    var env = grunt.option('env') || 'prod';

    // Built Asset Paths
    var buildScripts = 'assets/js/';
    var buildStyles  = 'assets/styles/css/';

    // App Scripts
    var _scripts = [
        buildScripts + 'accordion.js',
        buildScripts + 'carousel.js',
        buildScripts + 'modal.js',
        buildScripts + 'off-canvas-nav.js',
        buildScripts + 'sticky.js',
        buildScripts + 'syntax-highlighter.js',
        buildScripts + 'tabs.js',
        buildScripts + 'tooltip.js',
        buildScripts + 'global.js'
    ];

    /**
     * Tasks
     */
        
    grunt.initConfig({
		
        pkg: grunt.file.readJSON('package.json'),

        /**
         * Concat
         * @see https://github.com/gruntjs/grunt-contrib-concat
         */
        concat: {
            app: {
                src: _scripts,
                dest: buildScripts + 'app.js',
            }
        },
        
        /**
         * JS-Hint
         * @see https://github.com/gruntjs/grunt-contrib-jshint
         */
        jshint: {
            app: [
                'Gruntfile.js'
            ]
        },
      
        /**
         * Uglify
         * @see https://github.com/gruntjs/grunt-contrib-uglify
         */
        uglify: {
            options: {
                compress: {
                    drop_console: true
                }
            },
            app: {
                files: [{ 
                    src: buildScripts + 'app.js',
                    dest: buildScripts,
                    expand: true,
                    flatten: true,
                    rename: function(dest, src) { 
                        return dest + '/' + src.replace('.js', '.min.js'); 
                    }
                }]
            }
        },
      
        /**
         * Sass
         * @see https://github.com/sindresorhus/grunt-sass
         */
        sass: {
            options: {
                sourcemap: 'none'
            },
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    [buildStyles + 'app.css'] : 'assets/styles/scss/app.scss'
                }
            },
            prod: {
                options: {
                    style: 'compressed'
                },
                files: {
                    [buildStyles + 'app.min.css'] : 'assets/styles/scss/app.scss'
                }
            } 
        },
        
        /**
         * PostCSS
         * @see https://github.com/nDmitry/grunt-postcss
         */
        postcss: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({
                        browsers: [
                            'last 2 versions', 
                            'ie >= 9'
                        ]
                    })
                ]
            },
            build: {
                src: buildStyles + '*.css'
            }
        },
        
        /**
         * Watch
         * @see https://github.com/gruntjs/grunt-contrib-watch
         */
        watch: {
            options: {
                spawn: false
            },
            scripts: {
                files: _scripts,
                tasks: [
                    'concat', 
                    'uglify',
                    'notify:scripts'
                ]
            },
            css: {
                files: [
                    'assets/styles/**/*.scss',
                ],
                tasks: [ 
                    'sass:' + env, 
                    'postcss',
                    'notify:css'
                ]
            }
        },
        
        /**
         * Notify
         * @see https://github.com/dylang/grunt-notify
         */
        notify: {
            scripts: {
                options: {
                    title: 'Scripts Compiled',
                    message: 'All scripts have been successfully compiled!'
                }
            },
            css: {
                options: {
                    title: 'Styles Compiled',
                    message: 'All styles have been successfully compiled!'
                }
            },
            app: {
                options: {
                    title: 'App Built',
                    message: 'Your app has been successfully built!'
                }
            }
        }

    });
        
    /**
     * Load Npm Tasks
     */
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-postcss');
    //grunt.loadNpmTasks('grunt-sass');
        
    /**
     * Register Tasks
     */
    
    // Compile Assets
    var gruntCompile = function(environment) {
        var assetTasks = [
            'concat',
            'sass:' + environment,
            'postcss'
        ];
        if (environment == 'prod') {
            assetTasks.push(
                'uglify'
            );
        };
        return assetTasks;
    };
    
    //Default
    grunt.registerTask('default', [
        'compile',
        'watch'
    ]);
    
    // Compile the app
    grunt.registerTask('compile', 
        gruntCompile(env)
    );
    
    // Compile the app for a development environment
    grunt.registerTask('compile:dev', 
        gruntCompile('dev')
    );
    
    // Compile the app for a production environment
    grunt.registerTask('compile:prod',
        gruntCompile('prod')
    );

};