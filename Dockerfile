FROM ruby:2.2.3-onbuild

RUN rspec spec

CMD ["thin", "start"]
