import React from 'react';
import config from '../config';

interface GoogleLogoIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
}

/**
 * @name GoogleLogoIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/google-logo)
 * @see {@link https://clicons.dev/icon/google-logo}
 */
const GoogleLogoIcon = React.forwardRef<SVGSVGElement, GoogleLogoIconProps>(
  ({ size, color, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';

    const iconData = [
  [
    'path',
    {
      fillRule: 'evenodd',
      d: 'M10.143 5.787c1.052 0 1.987.357 2.734 1.044l2.045-2.005c-1.24-1.132-2.85-1.826-4.78-1.826a7.146 7.146 0 0 0-6.376 3.863 6.802 6.802 0 0 0 0 6.274v.007a7.152 7.152 0 0 0 6.377 3.856c1.928 0 3.545-.624 4.727-1.693 1.35-1.222 2.13-3.016 2.13-5.148 0-.496-.046-.974-.13-1.432h-6.727v2.711h3.844a3.225 3.225 0 0 1-1.435 2.106c-.636.42-1.448.675-2.41.675-1.856 0-3.434-1.228-4-2.883h-.008l.009-.006a4.119 4.119 0 0 1-.227-1.33c0-.465.084-.91.227-1.33.565-1.655 2.143-2.883 4-2.883Z'
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
        if (!processedAttrs.fill) processedAttrs.fill = finalColor;
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
        viewBox="0 0 20 20"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

GoogleLogoIcon.displayName = 'GoogleLogoIcon';
export default GoogleLogoIcon;
