<script setup></script>

<template>
  <v-container>
      <v-row>
          <v-col>
              <v-alert type="error">
                  <slot />
              </v-alert>
          </v-col>
      </v-row>
  </v-container>
</template>
