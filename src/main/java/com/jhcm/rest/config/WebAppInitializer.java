package com.jhcm.rest.config;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

public class WebAppInitializer implements WebApplicationInitializer {

	@Override
	public void onStartup(ServletContext servletContext)
			throws ServletException {

		AnnotationConfigWebApplicationContext rootContext = new AnnotationConfigWebApplicationContext();

		rootContext.register(AppConfig.class);
		rootContext.register(MVCConfig.class);
		rootContext.register(PersistenceConfig.class);
		// rootContext.register(SecurityConfig.class);

		servletContext.addListener(new ContextLoaderListener(rootContext));

		ServletRegistration.Dynamic dispatcher = servletContext.addServlet(
				"dispatcher", new DispatcherServlet(rootContext));
		dispatcher.setLoadOnStartup(1);
		dispatcher.addMapping("/");

	}
}