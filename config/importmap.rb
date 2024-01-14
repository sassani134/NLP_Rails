# Pin npm packages by running ./bin/importmap

pin 'application', preload: true
pin '@hotwired/turbo-rails', to: 'turbo.min.js', preload: true
pin '@hotwired/stimulus', to: '@hotwired--stimulus.js' # @3.2.2
pin '@hotwired/stimulus-loading', to: 'stimulus-loading.js'
pin_all_from 'app/javascript/controllers', under: 'controllers'
pin 'stimulus-content-loader' # @4.2.0
pin 'tailwindcss-stimulus-components' # @4.0.4
pin 'stimulus-textarea-autogrow' # @4.1.0
pin '@hotwired/stimulus', to: 'stimulus.min.js'
pin 'axios' # @1.6.5
pin '#lib/adapters/http.js', to: '#lib--adapters--http.js.js' # @2.0.1
pin '#lib/platform/node/classes/FormData.js', to: '#lib--platform--node--classes--FormData.js.js' # @2.0.1
pin '#lib/platform/node/index.js', to: '#lib--platform--node--index.js.js' # @2.0.1
