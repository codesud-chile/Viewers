/** @type {AppTypes.Config} */
window.config = {
	routerBasename: null,
	showStudyList: true,
	extensions: [],
	modes: [],
	whiteLabeling: {
		createLogoComponentFn: (React) =>
			React.createElement(
				"a",
				{
					target: "_blank",
					rel: "noopener noreferrer",
					className: "text-white underline",
					href: "http://codesud.cl",
				},
				React.createElement("img", {
					src: "./logo_white.png",
					className: "w-40 h-40",
					alt: "CODESUD CHILE",
				}),
			),
	},
	investigationalUseDialog: {
		option: "never",
	},
	// below flag is for performance reasons, but it might not work for all servers
	showWarningMessageForCrossOrigin: true,
	showCPUFallbackMessage: true,
	showLoadingIndicator: true,
	strictZSpacingForVolumeViewport: true,
	defaultDataSourceName: "dicomweb",
	dataSources: [
		{
			namespace: "@ohif/extension-default.dataSourcesModule.dicomweb",
			sourceName: "dicomweb",
			configuration: {
				friendlyName: "CODESUD Server",
				name: "CODESUD",
				wadoUriRoot: "http://localhost:8080/dcm4chee-arc/aets/CODESUD/wado",
				qidoRoot: "http://localhost:8080/dcm4chee-arc/aets/CODESUD/rs",
				wadoRoot: "http://localhost:8080/dcm4chee-arc/aets/CODESUD/rs",
				qidoSupportsIncludeField: true,
				imageRendering: "wadors",
				enableStudyLazyLoad: true,
				thumbnailRendering: "wadors",
				requestOptions: {
					auth: "admin:admin",
				},
				dicomUploadEnabled: true,
				singlepart: "pdf,video",
				// whether the data source should use retrieveBulkData to grab metadata,
				// and in case of relative path, what would it be relative to, options
				// are in the series level or study level (some servers like series some study)
				bulkDataURI: {
					enabled: true,
				},
				omitQuotationForMultipartRequest: true,
			},
		},
		{
			namespace: "@ohif/extension-default.dataSourcesModule.dicomjson",
			sourceName: "dicomjson",
			configuration: {
				friendlyName: "dicom json",
				name: "json",
			},
		},
		{
			namespace: "@ohif/extension-default.dataSourcesModule.dicomlocal",
			sourceName: "dicomlocal",
			configuration: {
				friendlyName: "dicom local",
			},
		},
	],
	studyListFunctionsEnabled: true,
};
