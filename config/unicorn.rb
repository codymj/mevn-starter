require 'fileutils'

listen '/tmp/nginx.socket'
before_fork do |server,worker|
    FileUtils.touch('/tmp/app-initialized')
end
