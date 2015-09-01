package com.jhcm.rest.config;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.core.env.Environment;

@Configuration
@ComponentScan(basePackages = { "com.jhcm.rest" })
@PropertySource(value = "classpath:application.properties")
public class AppConfig {

	private static final Logger log = LoggerFactory.getLogger(AppConfig.class);

	@Resource
	private Environment env;

	@Bean
	public static PropertySourcesPlaceholderConfigurer placeHolderConfigurer() {
		return new PropertySourcesPlaceholderConfigurer();
	}

}
