provider "azurerm" {
  # whilst the `version` attribute is optional, we recommend pinning to a given version of the Provider
  version = "=2.44.0"
  features {}
}

resource "azurerm_resource_group" "project4" {
  name     = "project4-resources"
  location = "Central US"
}

resource "azurerm_app_service_plan" "project4example" {
  name                = "project4-appserviceplan"
  location            = azurerm_resource_group.project4.location
  resource_group_name = azurerm_resource_group.project4.name

  sku {
    tier = "Free"
    size = "F1"
  }
}

resource "azurerm_app_service" "project4example" {
  name                = "project4-app-service-jray"
  location            = azurerm_resource_group.project4.location
  resource_group_name = azurerm_resource_group.project4.name
  app_service_plan_id = azurerm_app_service_plan.project4example.id

  site_config {
    dotnet_framework_version = "v5.0"
    scm_type                 = "VSTSRM"
    always_on = false
    use_32_bit_worker_process = true
  }
}

resource "azurerm_sql_server" "project4" {
  name                         = "project4-sqlserver-jray"
  resource_group_name          = azurerm_resource_group.project4.name
  location                     = "Central US"
  version                      = "12.0"
  administrator_login          = "jray22"
  administrator_login_password = "Abcde12345"
}

resource "azurerm_sql_database" "project4" {
  name                = "jray22TodoApp"
  resource_group_name = azurerm_resource_group.project4.name
  location            = "Central US"
  server_name         = azurerm_sql_server.project4.name
  edition = "Basic"
}
