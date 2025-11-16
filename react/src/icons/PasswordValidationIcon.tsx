import React from 'react';
import config from '../config';

interface PasswordValidationIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PasswordValidationIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/password-validation)
 * @see {@link https://clicons.dev/icon/password-validation}
 */
const PasswordValidationIcon = React.forwardRef<SVGSVGElement, PasswordValidationIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M13.4082 16.6677C13.4082 16.6677 14.0332 16.6677 14.6582 18.001C14.6582 18.001 16.6435 14.6677 18.4082 14.001'
    }
  ],
  [
    'path',
    {
      d: 'M16.9434 7.00098H16.9524'
    }
  ],
  [
    'path',
    {
      d: 'M11.9434 7.00098H11.9524'
    }
  ],
  [
    'path',
    {
      d: 'M6.94336 7.00098H6.95234'
    }
  ],
  [
    'path',
    {
      d: 'M7.89193 11.968H5.00845C3.34693 11.968 2 10.6249 2 8.96802V4.99805C2 3.34119 3.34693 1.99805 5.00845 1.99805H18.9916C20.6531 1.99805 22 3.34119 22 4.99805V9.12895'
    }
  ],
  [
    'path',
    {
      d: 'M21.9996 16.001C21.9996 12.6873 19.3057 10.001 15.9827 10.001C12.6597 10.001 9.96582 12.6873 9.96582 16.001C9.96582 19.3147 12.6597 22.001 15.9827 22.001C19.3057 22.001 21.9996 19.3147 21.9996 16.001Z'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

PasswordValidationIcon.displayName = 'PasswordValidationIcon';
export default PasswordValidationIcon;
