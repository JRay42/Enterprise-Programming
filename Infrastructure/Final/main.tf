provider "azurerm" {
  # whilst the `version` attribute is optional, we recommend pinning to a given version of the Provider
  version = "=2.44.0"
  features {}
}

resource "azurerm_resource_group" "final" {
  name     = "final-resources"
  location = "Central US"
}

resource "azurerm_app_service_plan" "finalexample" {
  name                = "final-appserviceplan"
  location            = azurerm_resource_group.final.location
  resource_group_name = azurerm_resource_group.final.name

  sku {
    tier = "Free"
    size = "F1"
  }
}

resource "azurerm_app_service" "finalexample" {
  name                = "final-app-service-jray"		#CHANGEME
  location            = azurerm_resource_group.final.location
  resource_group_name = azurerm_resource_group.final.name
  app_service_plan_id = azurerm_app_service_plan.finalexample.id

  site_config {
    dotnet_framework_version = "v5.0"
    scm_type                 = "VSTSRM"
    always_on = false
    use_32_bit_worker_process = true
  }
}

resource "azurerm_sql_server" "final" {
  name                         = "final-sqlserver-jray" 	#CHANGEME
  resource_group_name          = azurerm_resource_group.final.name
  location                     = "Central US"
  version                      = "12.0"
  administrator_login          = "jray22"			#CHANGEME
  administrator_login_password = "Abcde12345"			#CHANGEME
}

resource "azurerm_sql_database" "final" {
  name                = "jray22TodoAppFinal"			#CHANGEME
  resource_group_name = azurerm_resource_group.final.name
  location            = "Central US"
  server_name         = azurerm_sql_server.final.name
  edition = "Basic"
}
