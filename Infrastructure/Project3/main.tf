provider "azurerm" {
  # whilst the `version` attribute is optional, we recommend pinning to a given version of the Provider
  version = "=2.44.0"
  features {}
}

resource "azurerm_resource_group" "project3" {
  name     = "project3-resources"
  location = "Central US"
}

resource "azurerm_app_service_plan" "project3example" {
  name                = "project3-appserviceplan"
  location            = azurerm_resource_group.project3.location
  resource_group_name = azurerm_resource_group.project3.name

  sku {
    tier = "Free"
    size = "F1"
  }
}

resource "azurerm_app_service" "project3example" {
  name                = "project3-app-service-jray" #CHANGEME
  location            = azurerm_resource_group.project3.location
  resource_group_name = azurerm_resource_group.project3.name
  app_service_plan_id = azurerm_app_service_plan.project3example.id

  site_config {
    dotnet_framework_version = "v5.0"
    scm_type                 = "VSTSRM"
    always_on = false
    use_32_bit_worker_process = true
  }
}
