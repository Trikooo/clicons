import React from 'react';
import config from '../config';

interface Logout2IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Logout2Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/logout2)
 * @see {@link https://clicons.dev/icon/logout2}
 */
const Logout2Icon = React.forwardRef<SVGSVGElement, Logout2IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M4.39267 4.00087C4 4.61597 4 5.41166 4 7.00304V16.997C4 18.5883 4 19.384 4.39267 19.9991C4.46279 20.109 4.5414 20.2132 4.62777 20.3108C5.11144 20.8572 5.87666 21.0758 7.4071 21.513C8.9414 21.9513 9.70856 22.1704 10.264 21.8417C10.3604 21.7847 10.45 21.7171 10.5313 21.6402C11 21.1965 11 20.3988 11 18.8034V5.19662C11 3.60122 11 2.80351 10.5313 2.35982C10.45 2.28288 10.3604 2.21527 10.264 2.15827C9.70856 1.82956 8.9414 2.0487 7.4071 2.48699C5.87666 2.92418 5.11144 3.14278 4.62777 3.68925C4.5414 3.78684 4.46279 3.89103 4.39267 4.00087Z'
    }
  ],
  [
    'path',
    {
      d: 'M11 4H13.0171C14.9188 4 15.8696 4 16.4604 4.58579C16.7898 4.91238 16.9355 5.34994 17 6M11 20H13.0171C14.9188 20 15.8696 20 16.4604 19.4142C16.7898 19.0876 16.9355 18.6501 17 18'
    }
  ],
  [
    'path',
    {
      d: 'M21 12H14M19.5 9.49994C19.5 9.49994 22 11.3412 22 12C22 12.6588 19.5 14.4999 19.5 14.4999'
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

Logout2Icon.displayName = 'Logout2Icon';
export default Logout2Icon;
