# Sample gem written in Rust

## Installation

```bash
$ gem install greeting
```

## Usage

```rb
require 'greeting'

Greeting.say
# => 'Hello, World!'
```

## Development

```bash
$ docker compose build
```

## Build

```bash
$ docker compose run app gem build greeting.gemspec
```

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
