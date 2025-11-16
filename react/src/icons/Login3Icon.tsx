import React from 'react';
import config from '../config';

interface Login3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Login3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/login3)
 * @see {@link https://clicons.dev/icon/login3}
 */
const Login3Icon = React.forwardRef<SVGSVGElement, Login3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6 18C6 18.4644 6 18.6965 6.022 18.8918C6.20482 20.5145 7.48545 21.7952 9.10814 21.978C9.30345 22 9.53562 22 9.99998 22H13C16.2998 22 17.9497 22 18.9749 20.9749C20 19.9498 20 18.2998 20 15L20 8.99998C20 5.70016 20 4.05024 18.9748 3.02512C17.9497 2 16.2998 2 13 2H9.99998C9.53563 2 9.30345 2 9.10814 2.02201C7.48545 2.20483 6.20482 3.48547 6.022 5.10816C6 5.30347 6 5.53565 6 6'
    }
  ],
  [
    'path',
    {
      d: 'M4.07612 11.1183C4 11.3021 4 11.535 4 12.001C4 12.4669 4 12.6999 4.07612 12.8837C4.17761 13.1287 4.37229 13.3234 4.61732 13.4249C4.80109 13.501 5.03406 13.501 5.5 13.501H10.5C10.5002 15.2503 10.511 16.1299 11.0623 16.3858C11.0829 16.3954 11.1037 16.4042 11.1249 16.4124C11.7045 16.6353 12.3999 16.0139 13.7907 14.7711C15.2576 13.4602 15.9912 12.7851 16 11.957C15.9912 11.1289 15.2576 10.4538 13.7907 9.14301C12.3999 7.90018 11.7045 7.27876 11.1249 7.50171C11.1037 7.50985 11.0829 7.51869 11.0623 7.52822C10.5018 7.78844 10.5 8.69318 10.5 10.501H5.5C5.03406 10.501 4.80109 10.501 4.61732 10.5771C4.37229 10.6786 4.17761 10.8733 4.07612 11.1183Z'
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

Login3Icon.displayName = 'Login3Icon';
export default Login3Icon;
