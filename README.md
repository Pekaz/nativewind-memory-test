# Nativewind Demo

This project is a minimal reproduction project that shows that when using Nativewind in React Native, memory keeps increasing for unknown reasons on repeated re-renders.

## Project Structure

The repository contains two identical projects that increment 10 numbers every 10ms and re-render them on the screen:
(Look at `app/(tabs)/_layout.tsx`)

- `rerendering_test`: Uses Nativewind
- `rerendering_test1`: without Nativewind

## Issue Description

When running the applications for an extended period:

- The Nativewind version (`rerendering_test`) shows continuous memory growth
- The regular React Native version (`rerendering_test1`) maintains stable memory usage
