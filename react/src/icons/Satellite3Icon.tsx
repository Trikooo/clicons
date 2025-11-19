import React from 'react';
import config from '../config';

interface Satellite3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Satellite3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/satellite3)
 * @see {@link https://clicons.dev/icon/satellite3}
 */
const Satellite3Icon = React.forwardRef<SVGSVGElement, Satellite3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12.5355 6.10913C14.0144 4.63029 16.412 4.63029 17.8909 6.10913C19.3697 7.58796 19.3697 9.98563 17.8909 11.4645L15.7487 13.6066C14.8881 14.4672 14.4578 14.8975 13.937 14.98C13.7688 15.0067 13.5974 15.0067 13.4292 14.98C12.9084 14.8975 12.4781 14.4672 11.6175 13.6066L10.3934 12.3825C9.53278 11.5219 9.10247 11.0916 9.01998 10.5708C8.99334 10.4026 8.99334 10.2312 9.01998 10.063C9.10247 9.54219 9.53278 9.11188 10.3934 8.25126L12.5355 6.10913Z'
    }
  ],
  [
    'path',
    {
      d: 'M6.8483 14C6.96714 15.5706 8.41803 17.0084 10 17.1305M3.00586 15.2381C2.85202 18.2662 5.7538 21.1419 8.80421 20.9946'
    }
  ],
  [
    'path',
    {
      d: 'M12.5293 5.52954L10.9336 3.8673C10.3555 3.2891 10.0664 3 9.70711 3C9.34786 3 9.05876 3.2891 8.48057 3.8673L7.8673 4.48057C7.2891 5.05876 7 5.34786 7 5.70711C7 6.06635 7.2891 6.35545 7.8673 6.93365L9.31826 8.38462M18.4214 11.355L20.1327 13.0664C20.7109 13.6445 21 13.9336 21 14.2929C21 14.6521 20.7109 14.9412 20.1327 15.5194L19.5194 16.1327C18.9412 16.7109 18.6521 17 18.2929 17C17.9336 17 17.6445 16.7109 17.0664 16.1327L15.5111 14.5775'
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

Satellite3Icon.displayName = 'Satellite3Icon';
export default Satellite3Icon;
